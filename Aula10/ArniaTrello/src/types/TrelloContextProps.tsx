export interface TrelloContextType {
    data: {
      boards: string[]; // Substitua `any[]` pelo tipo real dos seus objetos de quadro
      selectedBoardId:  string | null;
    };
    updateData: (newData: Partial<TrelloContextType['data']>) => void;
  }

export const defaultValueDoContexto: TrelloContextType = {
    data: {
      boards: [],
      selectedBoardId: null,
    },
    updateData: () => {},
  };