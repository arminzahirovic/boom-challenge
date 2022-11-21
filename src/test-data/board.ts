import { Cell } from "src/app/game-feature/domain/Cell.model";
import { CellType } from "src/app/game-feature/domain/CellType.enum";

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
