import sanityClient from '@sanity/client';
import groq from 'groq';
import { IRecipe } from './types';


const client = sanityClient({
  projectId: 'qilk8akm',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true, // `false` if you want to ensure fresh data
});

const RECEPIE_LIST_QUERY = groq`
*[_type == 'recipe']{
    title, 
    basedOn,
    servings,
    description,
    ingredients[]{
      amount,
      "title":ingredient->title,
      "mesure":mesure->title
    }, 
    steps
  }
`;

export const fetchRecepies = async (): Promise<IRecipe[]> => {
  return client.fetch<IRecipe[]>(RECEPIE_LIST_QUERY);
};