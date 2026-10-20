/**
 * Production Nile Ecosystem API Client
 * Connects frontend directly to real backends (Vercel Serverless / Cloudflare Pages / Node.js)
 */

const API_BASE = (import.meta.env?.VITE_API_URL as string) || '/api';

class ApiClient {
  private getAuthToken(): string | null {
    try {
      return localStorage.getItem('nile_auth_token');
    } catch {
      return null;
    }
  }

  public setAuthToken(token: string | null) {
    try {
      if (token) {
        localStorage.setItem('nile_auth_token', token);
      } else {
        localStorage.removeItem('nile_auth_token');
      }
    } catch {}
  }

  private async request<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const token = this.getAuthToken();

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(options.headers as Record<string, string> || {}),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const contentType = response.headers.get('content-type');
      let data: any = {};
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        try {
          data = JSON.parse(text);
        } catch {
          data = { message: text };
        }
      }

      if (!response.ok) {
        const errorMsg = data?.message || data?.errors?.[0]?.msg || `HTTP ${response.status}: Request failed`;
        throw new Error(errorMsg);
      }

      return data as T;
    } catch (err: any) {
      console.warn(`[Nile API Error] ${endpoint}:`, err?.message || err);
      throw err;
    }
  }

  // ===================== AUTH =====================
  public auth = {
    register: (payload: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      phone?: string;
      referralCode?: string;
      preferredLanguage?: string;
    }) => this.request('/auth/register', { method: 'POST', body: JSON.stringify(payload) }),

    login: (payload: { email: string; password: string; twoFactorCode?: string }) =>
      this.request('/auth/login', { method: 'POST', body: JSON.stringify(payload) }),

    getProfile: () => this.request('/auth/profile', { method: 'GET' }),

    submitKyc: (payload: {
      idType: string;
      idNumber: string;
      frontImageUrl: string;
      backImageUrl?: string;
      selfieUrl?: string;
    }) => this.request('/auth/kyc', { method: 'POST', body: JSON.stringify(payload) }),
  };

  // ===================== WALLETS & PAYMENTS =====================
  public wallets = {
    getAll: () => this.request('/wallets', { method: 'GET' }),

    createDeposit: (payload: {
      walletType?: string;
      amount: number;
      currency?: string;
      txid: string;
      network?: string;
    }) => this.request('/wallets/deposit', { method: 'POST', body: JSON.stringify(payload) }),

    requestWithdrawal: (payload: {
      walletType?: string;
      amount: number;
      currency?: string;
      toAddress: string;
      network?: string;
    }) => this.request('/wallets/withdraw', { method: 'POST', body: JSON.stringify(payload) }),

    transfer: (payload: {
      fromType: string;
      toType: string;
      amount: number;
      currency?: string;
    }) => this.request('/wallets/transfer', { method: 'POST', body: JSON.stringify(payload) }),

    getHistory: () => this.request('/wallets/history', { method: 'GET' }),

    getCycles: () => this.request('/wallets/cycles', { method: 'GET' }),
  };

  // ===================== INVESTMENTS & STAKING =====================
  public investments = {
    getPlans: () => this.request('/investments/plans', { method: 'GET' }),

    simulate: (payload: {
      planType: string;
      amount: number;
      lockDays?: number;
      isNileFunded?: boolean;
    }) => this.request('/investments/simulate', { method: 'POST', body: JSON.stringify(payload) }),

    create: (payload: {
      planId: string;
      amount: number;
      paymentSource?: 'INTERNAL_WALLET' | 'NILE_TOKEN';
    }) => this.request('/investments', { method: 'POST', body: JSON.stringify(payload) }),

    getMy: () => this.request('/investments/my', { method: 'GET' }),

    stake: (payload: { amount: number; lockDays: number }) =>
      this.request('/investments/stake', { method: 'POST', body: JSON.stringify(payload) }),

    getMyStakes: () => this.request('/investments/stakes', { method: 'GET' }),
  };

  // ===================== REFERRALS =====================
  public referrals = {
    getStats: () => this.request('/referrals/stats', { method: 'GET' }),

    getTree: () => this.request('/referrals/tree', { method: 'GET' }),

    reinvest: (payload: { amount: number; planId: string }) =>
      this.request('/referrals/reinvest', { method: 'POST', body: JSON.stringify(payload) }),
  };

  // ===================== MARKETPLACE & SHOP =====================
  public shop = {
    getProducts: (category?: string) =>
      this.request(category ? `/shop/products?category=${encodeURIComponent(category)}` : '/shop/products', {
        method: 'GET',
      }),

    createOrder: (payload: { productId: string; walletType?: string }) =>
      this.request('/shop/orders', { method: 'POST', body: JSON.stringify(payload) }),

    requestTokenCreation: (payload: {
      tokenName: string;
      tokenSymbol: string;
      network: string;
      decimals?: number;
      totalSupply: number;
      extraFeatures?: string;
    }) => this.request('/shop/token-creation', { method: 'POST', body: JSON.stringify(payload) }),

    getMyOrders: () => this.request('/shop/my-orders', { method: 'GET' }),
  };

  // ===================== CRYPTO CARDS =====================
  public cards = {
    getCards: () => this.request('/cards', { method: 'GET' }),

    apply: (payload: { name?: string; type?: string; tier?: string; currency?: string }) =>
      this.request('/cards/apply', { method: 'POST', body: JSON.stringify(payload) }),

    freeze: (cardId: string) => this.request(`/cards/${cardId}/freeze`, { method: 'POST' }),

    topup: (cardId: string, amount: number) =>
      this.request(`/cards/${cardId}/load`, { method: 'POST', body: JSON.stringify({ amount }) }),
  };

  // ===================== PRESALE =====================
  public presale = {
    getPhases: () => this.request('/presale/phases', { method: 'GET' }),

    buyTokens: (payload: {
      phaseId: number;
      amountUsd: number;
      paymentAsset?: string;
      network?: string;
      txHash?: string;
    }) => this.request('/presale/buy', { method: 'POST', body: JSON.stringify(payload) }),

    getMy: () => this.request('/presale/my', { method: 'GET' }),
  };

  // ===================== SUPPORT =====================
  public support = {
    getTickets: () => this.request('/support/tickets', { method: 'GET' }),

    createTicket: (payload: {
      subject: string;
      category?: string;
      priority?: string;
      message: string;
    }) => this.request('/support/tickets', { method: 'POST', body: JSON.stringify(payload) }),

    replyTicket: (ticketId: string, message: string) =>
      this.request(`/support/tickets/${ticketId}/reply`, {
        method: 'POST',
        body: JSON.stringify({ message }),
      }),
  };

  // ===================== ACADEMY =====================
  public academy = {
    getArticles: (category?: string, language: string = 'en') =>
      this.request(`/academy/articles?language=${encodeURIComponent(language)}${category ? `&category=${encodeURIComponent(category)}` : ''}`, {
        method: 'GET',
      }),

    getArticle: (slug: string) => this.request(`/academy/articles/${encodeURIComponent(slug)}`, { method: 'GET' }),

    getFaqs: () => this.request('/academy/faqs', { method: 'GET' }),
  };

  // ===================== ADMIN PORTAL =====================
  public admin = {
    getUsers: () => this.request('/admin/users', { method: 'GET' }),

    adjustBalance: (payload: {
      userId: string;
      walletType: string;
      currency?: string;
      deltaAmount: number;
      reason: string;
    }) =>
      this.request(`/admin/users/${payload.userId}/adjust-balance`, {
        method: 'POST',
        body: JSON.stringify(payload),
      }),

    confirmDeposit: (depositId: string, reason?: string) =>
      this.request(`/admin/deposits/${depositId}/confirm`, {
        method: 'POST',
        body: JSON.stringify({ reason }),
      }),

    payoutWithdrawal: (payload: {
      withdrawalId: string;
      action: 'APPROVE' | 'REJECT';
      payoutTxid?: string;
      reason?: string;
    }) =>
      this.request(`/admin/withdrawals/${payload.withdrawalId}/payout`, {
        method: 'POST',
        body: JSON.stringify(payload),
      }),

    reviewKyc: (payload: {
      userId: string;
      status: 'APPROVED' | 'REJECTED';
      reason: string;
      adminNotes?: string;
    }) =>
      this.request(`/admin/users/${payload.userId}/kyc-decision`, {
        method: 'POST',
        body: JSON.stringify(payload),
      }),

    getAuditLogs: () => this.request('/admin/audit-logs', { method: 'GET' }),

    getDeposits: () => this.request('/admin/deposits', { method: 'GET' }),

    getWithdrawals: () => this.request('/admin/withdrawals', { method: 'GET' }),

    getPendingKyc: () => this.request('/admin/kyc-pending', { method: 'GET' }),

    getStats: () => this.request('/admin/overview-stats', { method: 'GET' }),

    triggerDailyProfits: (reason?: string) =>
      this.request('/admin/trigger-profit-run', {
        method: 'POST',
        body: JSON.stringify({ reason }),
      }),
  };
}

export const api = new ApiClient();
export default api;
