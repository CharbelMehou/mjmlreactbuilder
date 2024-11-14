'use client';

import React, { useState } from 'react';
import Mjml from './components/Mjml';
import MjBody from './components/MjBody';
import MjSection from './components/MjSection';
import MjColumn from './components/MjColumn';
import MjText from './components/MjText';
import MjButton from './components/MjButton';
import MjSocial from './components/MjSocial';
import MjSocialElement from './components/MjSocialElement';
import './components/style.css';
import { convertMjmlJsonToReact } from './utils/mjmlConverter';

export default function Home() {
  const [mjmlInput, setMjmlInput] = useState('');
  const [reactOutput, setReactOutput] = useState(null);
  const [error, setError] = useState(null);

  const handleConvert = async () => {
    setError(null);
    try {
      // Appeler l'API pour convertir le MJML en JSON
      const response = await fetch('/api/convertMjmlToJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mjml: mjmlInput }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la conversion MJML en JSON');
      }

      const data = await response.json();
      console.log("json",data.json)
      const components = {
        Mjml,
        MjBody,
        MjSection,
        MjColumn,
        MjText,
        MjButton,
        MjSocial,
        MjSocialElement,
      };

      // Convertir le JSON MJML en éléments React
      const convertedReact = convertMjmlJsonToReact(data.json, components);
      setReactOutput(convertedReact);
    } catch (err) {
      console.error(err);
      setError('Erreur lors de la conversion. Veuillez vérifier votre code MJML.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Convertisseur MJML vers Composants React</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Entrée MJML :</h3>
        <textarea
          rows="20"
          cols="100"
          value={mjmlInput}
          onChange={(e) => setMjmlInput(e.target.value)}
          placeholder="Entrez votre code MJML ici"
          style={{ width: '100%', padding: '10px' }}
        />
      </div>
      <button onClick={handleConvert} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Convertir
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginTop: '20px' }}>
        <h3>Rendu des Composants React :</h3>
        <div className="frame-container">
          {reactOutput}
        </div>
      </div>
    </div>
  );
}
