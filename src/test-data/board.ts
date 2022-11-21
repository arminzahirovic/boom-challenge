import { Cell } from "src/app/game-feature/domain/Cell.model";
import { CellType } from "src/app/game-feature/domain/CellType.enum";

export const boardMock: Cell[][] = [
    [
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Boom,
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
        type: CellType.Boom,
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
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Boom,
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
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: false
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Boom,
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
        type: CellType.Boom,
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
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Boom,
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

  export const boardMockBoomSelected: Cell[][] = [
    [
      {
        type: CellType.Boom,
        hidden: false
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Boom,
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
        type: CellType.Boom,
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
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Boom,
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
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Boom,
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
        type: CellType.Boom,
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
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Smiley,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      }
    ],
    [
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Boom,
        hidden: true
      },
      {
        type: CellType.Reset,
        hidden: true
      },
      {
        type: CellType.Boom,
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
