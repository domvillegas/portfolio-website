export interface Star {
  data: () => Star;
  id: string;
  changeLog: string;
  editTime: {
    seconds: number;
  };
  name: string;
  note: string;
  position: {
    x: string;
    y: string;
  };
}
