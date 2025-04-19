export default class ChatAssistantService {
  static async getResponse(input: string): Promise<string> {
    const msg = input.toLowerCase();
    if (msg.includes('menu')) {
      return 'You can browse our menu at /menu. Let me know if you need recommendations!';
    }
    if (msg.includes('location') || msg.includes('where')) {
      return 'Find all our locations at /locations. Use the map to see which one is nearest you.';
    }
    if (msg.includes('hours') || msg.includes('open')) {
      return 'We are open daily from 11 AM to 10 PM. Check /locations for exact hours by location.';
    }
    if (msg.includes('order')) {
      return 'To place an order, add items to your cart and go to /checkout. I'm here if you need help!';
    }
    if (msg.includes('points') || msg.includes('reward')) {
      return 'Your loyalty points are shown at /rewards. You can earn more by ordering or playing games!';
    }
    // Default fallback
    return 'I'm here to help! You can ask me about our menu, locations, hours, or rewards.';
  }
}
