export type Skill = {
    id:number;
    name: string;
    count: number;
    type?: string;
  };
  
  export const dummySkills: Skill[] = [
    {id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'},
    {id: 2, name: 'Typescript', count: 3, type: 'dev'},
  ];