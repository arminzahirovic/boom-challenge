import { Cell } from "src/app/game-feature/domain/Cell.model";
import { CellType } from "src/app/game-feature/domain/CellType.enum";
import { GameStoreSelectors } from "src/app/root-store/game-store";

export const boardMock: Cell[][] = [
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      }
    ]
  ];

  export const boardMockSmileySelected: Cell[][] = [
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: false
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      }
    ]
  ];

  export const boardMockBombSelected: Cell[][] = [
    [
      {
        type: CellType.Bomb,
        hidden: false
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      }
    ]
  ];

  export const boardMockResetSelected: Cell[][] = [
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: false
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Bomb,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      }
    ]
  ];

  export const selectorsMock = [
    { 
      selector: GameStoreSelectors.cells,
      value: boardMock 
    },
    {
      selector: GameStoreSelectors.numberOfPlays,
      value: 0,
    },
    {
      selector: GameStoreSelectors.consecutiveBombs,
      value: 0,
    },
    {
      selector: GameStoreSelectors.consecutiveSmileys,
      value: 0,
    },
    {
      selector: GameStoreSelectors.bombsAround,
      value: 0,
    },
    {
      selector: GameStoreSelectors.isFinished,
      value: false,
    },
    {
      selector: GameStoreSelectors.isInProgress,
      value: true,
    },
    {
      selector: GameStoreSelectors.losses,
      value: 0,
    },
    {
      selector: GameStoreSelectors.wins,
      value: 0,
    },
    {
      selector: GameStoreSelectors.result,
      value: undefined,
    }
  ];