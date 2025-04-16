export interface QuoteData {
  id: string;
  name: string;
  title: string;
  quote: string;
  source: string;
  imageSrc?: string; // Optional field for images
}

export const quoteData: QuoteData[] = [
  {
    id: "quote-1",
    name: "Stefanie Zadravec",
    title: "Playwright",
    quote: "I tend to write small stories that fit within a larger context, and as with any known topic I had to discover a way into the story. What I thought would be a 'political play' about women and rape camps, became the story of two young men who are forever changed after spending a day with two women war has stranded in their kitchens. By bringing the war right inside a familiar location the dialogue and characters came alive.",
    source: "The Everyday Art of Staying Alive: Honey Brown Eyes at The Working Theater by Andi Stover"
  },
  {
    id: "quote-2",
    name: "Mirsada",
    title: "15-year-old Survivor",
    quote: "I lived in the Srebrenica municipality. Bosniaks and Serbs lived there together – I couldn’t see any difference between us. It was not until the war started in 1991 in Croatia that I had a clue who was Croat, who was Serb, who was Muslim. Then, at the beginning of 1992, Serbs started to move out of my village. They just disappeared. The rumours began that there would be war in Bosnia too, but we didn’t think it could happen to us. One night, I was woken by explosions and shooting. It was the most terrifying moment of my life – I was lying in bed, hearing my heart beating, I couldn’t breathe. My sister and I jumped out of bed and ran to my parents’ room. No one knew what was happening. As soon as it got light we left our home and met other Bosnian Muslims, who were heading to the meadows for safety. We didn’t have any food, so we would go to the village in the early morning to find some. That’s how we were captured by our own neighbours –  my father, my aunt, and me. My father asked, “What is all this about, my neighbour, what is it?” Our neighbour acted as if he didn’t know us at all. He was armed, so we went with him to the mining company’s head office, where there were other Bosnian Muslim prisoners. The commander told us that those people whose names were called were going for exchange. He called everyone’s names except nine of us, mainly girls. That is where the nightmare really began",
    source: "Srebrenica Memorial Centre, 'The Courage to Survive: Mirsada'"
  },
  {
    id: "quote-3",
    name: "Savo Heleta",
    title: "Survivor",
    quote: "My family struggled in the city like all other residents, under constant bombardment and sniper fire, without electricity, water and sufficient food. We are also Bosnian Serbs, like the forces who were attacking the city. My first experience with hunger was in the summer of 1992.",
    source: "From Bosnia to Palestine: Chronicles of War, Hunger, and Expired Food Aid"
  },
  {
    id: "quote-4",
    name: "President Bush",
    title: "June 11th, 1992",
    quote: "We're concerned about the situation in Yugoslavia, but there's no commitment on that. We're going to do what we can in a humanitarian way, and we're working with the United Nations. We will do what we should do, but I'm not going to go into the fact of using U.S. troops. We're not the world's policeman.",
    source: "The Washington Post, June 12, 1992"
  },
  {
    id: "quote-5",
    name: "Enisa",
    title: "Survivor",
    quote: "Our youth has gone and the town where we all once used to live together is gone.",
    source: "Carnegie Council, 'Helpless Bosnia and Its Women 20 Years After Ethnic War'"
  },
  {
    id: "quote-6",
    name: "Ferid Buljubasic",
    title: "Lieutenant Colonel, Yugoslav National Army",
    quote: "When they (UK's Special Air Service) came, they were pumped up, dressed, they had vests, all sorts of things, camouflage paint. The very moment it got troubling, they vanished. As the attacks went on, and as the Chetniks were getting close to Gorazde, one night, the Special Air Service – a helicopter came to pick them up – they took their stuff and ran away without letting anyone know.",
    source: "Middle East Eye, 'Operation Screwdriver: The secret British plan to abandon Bosnia as Srebrenica fell'"
  },
  {
    id: "quote-7",
    name: "Bakira Hasecic",
    title: "Survivor",
    quote: "But the largest mass grave is the river. Bodies of lifeless Muslims were floating on the Drina like ants. My house was near the bank of Drina, which was filled with blood.",
    source: "International Business Times, 'Killing Bosnia's Ghosts: Fighting to Remember Balkan War Genocide'"
  },
  {
    id: "quote-8",
    name: "Zehra Turjacanin",
    title: "Only Survivor of the Bikavac Fire",
    quote: "There were many children in that house, it's so sad. People were burned alive, everybody was crying out; I simply can't describe what I heard then.",
    source: "SENSE Transitional Justice Center"
  }
];