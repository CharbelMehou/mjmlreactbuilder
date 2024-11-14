// utils/mjmlConverter.js
'use client'; // Indique que ce module peut être utilisé côté client

import React from 'react';
import parse from 'html-react-parser'; // Importer la bibliothèque

/**
 * Mappe les balises MJML aux composants React correspondants.
 */
const tagMap = {
  'mjml': 'Mjml',
  'mj-body': 'MjBody',
  'mj-section': 'MjSection',
  'mj-column': 'MjColumn',
  'mj-text': 'MjText',
  'mj-button': 'MjButton',
  'mj-social': 'MjSocial',
  'mj-social-element': 'MjSocialElement',
  // Ajoutez d'autres mappings si nécessaire
};

/**
 * Convertit les noms d'attributs de kebab-case à camelCase.
 */
const convertAttributes = (attribs) => {
  const newAttribs = {};
  for (let key in attribs) {
    const camelCaseKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    newAttribs[camelCaseKey] = attribs[key];
  }
  return newAttribs;
};

/**
 * Génère un élément React à partir d'un nœud MJML.
 */
export const generateReactElement = (node, components, keyPrefix = '') => {
  if (!node) return null;

  const { tagName, attributes = {}, children = [], content } = node;

  const Component = components[tagMap[tagName]];
  if (!Component) {
    console.warn(`Composant non trouvé pour la balise ${tagName}`);
    return null;
  }

  const convertedAttributes = convertAttributes(attributes);
  console.log(`Attributs pour ${tagName} :`, convertedAttributes);

  // Gérer les enfants
  const childrenElements = children.map((childNode, index) =>
    generateReactElement(childNode, components, `${keyPrefix}-${index}`)
  );

  // Ajouter le contenu texte si présent
  if (content) {
    const parsedContent = parse(content);
    childrenElements.unshift(parsedContent);
  }

  // Générer une clé unique pour l'élément
  const elementKey = `${keyPrefix}-${tagName}`;

  return React.createElement(
    Component,
    { key: elementKey, ...convertedAttributes },
    childrenElements.length > 0 ? childrenElements : null
  );
};

/**
 * Fonction pour convertir le JSON MJML en éléments React.
 */
export const convertMjmlJsonToReact = (mjmlJson, components) => {
  try {
    const reactElements = generateReactElement(mjmlJson, components);
    return reactElements;
  } catch (error) {
    console.error('Erreur lors de la conversion du JSON MJML en React :', error);
    throw error;
  }
};