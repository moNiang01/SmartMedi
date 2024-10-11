import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function ChatbotScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Bonjour ! Comment puis-je vous aider à gérer votre hypertension ?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'HypertensionBot',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

    // Simule une réponse automatique
    setTimeout(() => {
      const messageText = messages[0].text.toLowerCase();
      handleBotResponse(messageText);
    }, 1000);
  }, []);

  const handleBotResponse = (messageText) => {
    let response = '';
    if (messageText.includes('tabac')) {
      response = 'Il est important d’arrêter de fumer pour mieux gérer votre hypertension. Voulez-vous des conseils sur la façon d’arrêter de fumer ?';
    } else if (messageText.includes('pression') || messageText.includes('tension')) {
      response = 'La mesure précise de votre tension artérielle est essentielle. Prenez-la régulièrement, et informez votre médecin si elle reste élevée.';
    } else if (messageText.includes('nutrition')) {
      response = 'Une alimentation équilibrée est cruciale. Réduisez le sel, consommez plus de fruits et légumes, et évitez les aliments gras.';
    } else if (messageText.includes('médicaments')) {
      response = 'Il est essentiel de prendre vos médicaments régulièrement. Avez-vous besoin de rappels pour ne pas les oublier ?';
    } else if (messageText.includes('autosurveillance')) {
      response = 'L’autosurveillance vous aide à suivre votre état. Voulez-vous des conseils pour bien surveiller votre tension ?';
    } else {
      response = 'Je suis désolé, je n’ai pas bien compris. Pouvez-vous reformuler ou poser une autre question liée à la gestion de votre hypertension ?';
    }

    setMessages(previousMessages => GiftedChat.append(previousMessages, [
      {
        _id: Math.round(Math.random() * 1000000),
        text: response,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'HypertensionBot',
        },
      },
    ]));
  };

  return <GiftedChat messages={messages} onSend={messages => onSend(messages)} user={{ _id: 1 }} />;
}
