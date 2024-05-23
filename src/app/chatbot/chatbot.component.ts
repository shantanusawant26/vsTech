import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  messages: { text: string, sender: string }[] = [];
  userInput: string = '';

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.getBotResponse(this.userInput);
      this.userInput = '';
    }
  }

  getBotResponse(message: string) {
    // Mock bot response logic
    const botResponse = 'I am a chatbot, how can I help you?';
    setTimeout(() => {
      this.messages.push({ text: botResponse, sender: 'bot' });
    }, 1000);
  }

}

