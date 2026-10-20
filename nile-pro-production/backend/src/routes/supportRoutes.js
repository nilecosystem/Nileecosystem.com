const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const prisma = require('../utils/prisma');

let memoryTickets = [];

router.get('/tickets', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  try {
    let tickets = [];
    if (prisma && prisma.supportTicket) {
      try {
        tickets = await prisma.supportTicket.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } });
      } catch (e) {}
    }
    if (!tickets || tickets.length === 0) {
      tickets = memoryTickets.filter(t => t.userId === userId);
    }
    res.json({ success: true, tickets });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/tickets', authenticateToken, async (req, res) => {
  const { subject, category = 'GENERAL', priority = 'MEDIUM', message } = req.body;
  const userId = req.user.id;

  if (!subject || !message) {
    return res.status(400).json({ success: false, message: 'Subject and message are required.' });
  }

  const initialMessages = [
    { id: `msg-${Date.now()}-1`, sender: 'user', text: message, timestamp: new Date().toISOString() },
    { id: `msg-${Date.now()}-2`, sender: 'system', text: 'Thank you for reaching out to Nile 24/7 Global Client Services. A senior officer will respond shortly.', timestamp: new Date().toISOString() }
  ];

  const ticketData = {
    id: `ticket-${Date.now().toString(36)}`,
    userId,
    subject,
    category: category.toUpperCase(),
    status: 'OPEN',
    priority: priority.toUpperCase(),
    messages: JSON.stringify(initialMessages),
    createdAt: new Date(),
    updatedAt: new Date()
  };

  try {
    if (prisma && prisma.supportTicket) {
      try {
        const created = await prisma.supportTicket.create({ data: ticketData });
        return res.status(201).json({ success: true, message: 'Support ticket submitted.', ticket: created });
      } catch (e) {}
    }
    memoryTickets.push(ticketData);
    res.status(201).json({ success: true, message: 'Support ticket submitted.', ticket: ticketData });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/tickets/:id/reply', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  if (!message) return res.status(400).json({ success: false, message: 'Message content is required.' });

  try {
    let ticket = null;
    if (prisma && prisma.supportTicket) {
      try { ticket = await prisma.supportTicket.findUnique({ where: { id } }); } catch (e) {}
    }
    if (!ticket) ticket = memoryTickets.find(t => t.id === id);
    if (!ticket) return res.status(404).json({ success: false, message: 'Ticket not found.' });

    let parsedMessages = [];
    try {
      parsedMessages = typeof ticket.messages === 'string' ? JSON.parse(ticket.messages) : ticket.messages;
    } catch (e) { parsedMessages = []; }

    parsedMessages.push({ id: `msg-${Date.now()}`, sender: 'user', text: message, timestamp: new Date().toISOString() });
    const updatedMessagesJson = JSON.stringify(parsedMessages);

    if (prisma && prisma.supportTicket) {
      try {
        await prisma.supportTicket.update({ where: { id }, data: { messages: updatedMessagesJson, updatedAt: new Date() } });
      } catch (e) {}
    }
    ticket.messages = updatedMessagesJson;
    ticket.updatedAt = new Date();

    res.json({ success: true, message: 'Reply sent.', ticket });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
