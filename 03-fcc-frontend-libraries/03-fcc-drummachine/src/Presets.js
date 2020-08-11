// TR 909 SOUNDS
import BD909 from "./audio/909/BD.wav";
import SN909 from "./audio/909/SN.wav";
import LT909 from "./audio/909/LT.wav";
import MT909 from "./audio/909/MT.wav";
import HT909 from "./audio/909/HT.wav";
import RS909 from "./audio/909/RS.wav";
import CL909 from "./audio/909/CL.wav";
import CH909 from "./audio/909/CH.wav";
import OH909 from "./audio/909/OH.wav";

// TR 808 SOUNDS
import BD808 from "./audio/808/BD.wav";
import SN808 from "./audio/808/SN.wav";
import LT808 from "./audio/808/LT.wav";
import MT808 from "./audio/808/MT.wav";
import HT808 from "./audio/808/HT.wav";
import RS808 from "./audio/808/RS.wav";
import CL808 from "./audio/808/CL.wav";
import CH808 from "./audio/808/CH.wav";
import OH808 from "./audio/808/OH.wav";

export const TR909 = [
  {
    presetName: "TR 909",
    sounds: [
      {
        id: "BD",
        name: "BASS DRUM",
        source: BD909,
        trigger: "Q",
        keyCode: 81,
      },
      {
        id: "SN",
        name: "SNARE",
        source: SN909,
        trigger: "W",
        keyCode: 87,
      },
      {
        id: "LT",
        name: "LOW TOM",
        source: LT909,
        trigger: "E",
        keyCode: 69,
      },
      {
        id: "MT",
        name: "MID TOM",
        source: MT909,
        trigger: "A",
        keyCode: 65,
      },
      {
        id: "HT",
        name: "HIGH TOM",
        source: HT909,
        trigger: "S",
        keyCode: 83,
      },
      {
        id: "RS",
        name: "RIM SHOT",
        source: RS909,
        trigger: "D",
        keyCode: 68,
      },
      {
        id: "CL",
        name: "CLAP",
        source: CL909,
        trigger: "Z",
        keyCode: 90,
      },
      {
        id: "CH",
        name: "CLOSED HAT",
        source: CH909,
        trigger: "X",
        keyCode: 88,
      },
      {
        id: "OH",
        name: "OPEN HAT",
        source: OH909,
        trigger: "C",
        keyCode: 67,
      },
    ],
  },
];

export const TR808 = [
  {
    presetName: "TR 808",
    sounds: [
      {
        id: "BD",
        name: "BASS DRUM",
        source: BD808,
        trigger: "Q",
        keyCode: 81,
      },
      {
        id: "SN",
        name: "SNARE",
        source: SN808,
        trigger: "W",
        keyCode: 87,
      },
      {
        id: "LT",
        name: "LOW TOM",
        source: LT808,
        trigger: "E",
        keyCode: 69,
      },
      {
        id: "MT",
        name: "MID TOM",
        source: MT808,
        trigger: "A",
        keyCode: 65,
      },
      {
        id: "HT",
        name: "HIGH TOM",
        source: HT808,
        trigger: "S",
        keyCode: 83,
      },
      {
        id: "RS",
        name: "RIM SHOT",
        source: RS808,
        trigger: "D",
        keyCode: 68,
      },
      {
        id: "CL",
        name: "CLAP",
        source: CL808,
        trigger: "Z",
        keyCode: 90,
      },
      {
        id: "CH",
        name: "CLOSED HAT",
        source: CH808,
        trigger: "X",
        keyCode: 88,
      },
      {
        id: "OH",
        name: "OPEN HAT",
        source: OH808,
        trigger: "C",
        keyCode: 67,
      },
    ],
  },
];
