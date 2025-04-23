export interface QuoteData {
  id: string;
  name: string;
  title: string;
  quote: string | string[];
  source: string;
  imageSrc?: string;
}

export const quoteData: QuoteData[] = [
  {
    id: "quote-1",
    name: "Stefanie Zadravec",
    title: "Playwright",
    quote: "I tend to write small stories that fit within a larger context, and as with any known topic I had to discover a way into the story.  What I thought would be a 'political play' about women and rape camps, became the story of two young men who are forever changed after spending a day with two women war has stranded in their kitchens. By bringing the war right inside a familiar location the dialogue and characters came alive. As Americans it’s hard for us to think it could happen here. We ignored Bosnia and Rwanda. We ignore Afghanistan. The more we as Americans can see ourselves in these characters, the better for us.",
    source: "The Everyday Art of Staying Alive: Honey Brown Eyes at The Working Theater by Andi Stover"
  },
  {
    id: "quote-2",
    name: "Mirsada",
    title: "15-year-old Survivor",
    quote: "I lived in the Srebrenica municipality. Bosniaks and Serbs lived there together. It was not until the war started in 1991 in Croatia that I had a clue who was Croat, who was Serb, who was Muslim. Then, at the beginning of 1992, Serbs started to move out of my village. The rumours began that there would be war in Bosnia too, but we didn’t think it could happen to us. One night, I was woken by explosions and shooting. I was lying in bed, hearing my heart beating, I couldn’t breathe. My sister and I jumped out of bed and ran to my parents’ room. No one knew what was happening. As soon as it got light we left our home and met other Bosnian Muslims, who were heading to the meadows for safety. We didn’t have any food, so we would go to the village in the early morning to find some. That’s how we were captured by our own neighbours –  my father, my aunt, and me. Our neighbour acted as if he didn’t know us at all. He was armed, so we went with him to the mining company’s head office, where there were other Bosnian Muslim prisoners. The commander told us that those people whose names were called were going for exchange. He called everyone’s names except nine of us, mainly girls. That is where the nightmare really began.",
    source: "Srebrenica Memorial Centre, 'The Courage to Survive: Mirsada'"
  },
  {
    id: "quote-3",
    name: "Savo Heleta",
    title: "Survivor",
    quote: "My family struggled in the city like all other residents, under constant bombardment and sniper fire, without electricity, water and sufficient food. We are also Bosnian Serbs, like the forces who were attacking the city. My first experience with hunger was in the summer of 1992. We were arrested by police in the middle of the night and told to pack only a few small plastic bags of basic necessities and some food for a few days. We were detained in an apartment building next to the police station in the city center. We stayed there, eight to ten of us cramped in each room of four apartments, for months. Soon, the little food we had was gone. For weeks, the police did nothing to assist us. We improvised, asking Bosniak residents in the neighborhood to help us. My dad had a pack of cigarettes, which were of high value during the war, and exchanged them for water and food. A cigarette could get us some water or a loaf of bread. Today, when I think about my wartime experience and hunger, I rarely remember the food aid. What I remember are many ordinary people from Goražde, some of them our friends, some acquaintances, and sometimes even strangers, who, when finding out we were starving, would share what they had with us.",
    source: "From Bosnia to Palestine: Chronicles of War, Hunger, and Expired Food Aid"
  },
  {
    id: "quote-4",
    name: "George H. W. Bush",
    title: "41st US President",
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
    name: "Ferid Buljubašić",
    title: "Lieutenant Colonel, Yugoslav National Army",
    quote: "When they (UK’s Special Air Service) came, they were pumped up, dressed, they had vests, all sorts of things, camouflage paint. The very moment it got troubling, they vanished. As the attacks went on, and as the Chetniks were getting close to Gorazde, one night, the Special Air Service – a helicopter came to pick them up – they took their stuff and ran away without letting anyone know, without anything. They just disappeared, they just, one night, vanished.",
    source: "Middle East Eye, 'Operation Screwdriver: The secret British plan to abandon Bosnia as Srebrenica fell'"
  },
  {
    id: "quote-7",
    name: "Bakira Hasečić",
    title: "Survivor",
    quote: "But the largest mass grave is the river. Bodies of lifeless Muslims were floating on the Drina like ants. My house was near the bank of Drina, which was filled with blood.",
    source: "International Business Times, 'Killing Bosnia's Ghosts: Fighting to Remember Balkan War Genocide'"
  },
  {
    id: "quote-8",
    name: "Zehra Turjačani",
    title: "Only Survivor of the Bikavac Fire",
    quote: "There were many children in that house, it's so sad. The Serb soldiers first threw stones at windows to break them, and then lobbed hand grenades. For a while, they fired shots at the crowd inside the house and they set the house on fire. People were burned alive, everybody was crying out; I simply can't describe what I heard then. As the fire caught my clothes, I managed to get to the door, but it was blocked: a heavy iron garage door had been placed against it from the outside. Somehow I was able to pull myself out through a small opening in the door. As I ran towards the houses in the Mejdan neighborhood, I saw Serb soldiers lying in the grass and drinking.",
    source: "SENSE Transitional Justice Center"
  },
  {
    id: "quote-poem",
    name: "Nuala Ní Dhomhnaill",
    title: " Irish Poet",
    quote: [
      "A black day this,",
      "The sky is black.",
      "The sea is black.",
      "The gardens are black.",
      "The trees are black",
      "The hills are black.",
      "The buses are black.",
      "The cars bringing the kids to school are black.",
      "The politicians are scuffing about",
      "biting the legs and the tails off each other",
      "trying to persuade us",
      "to look on the bright side.",
      "Anyone who might be inclined",
      "to take them at their word",
      "would do well, maybe, to ask",
      "why they think it goes without saying",
      "that every black cloud has a silver lining."
    ],
    source: "Excerpt from 'Dubh' on the Fall of Srebrenica"
  }
];