import BD from "./audio/909/BD.wav";
import SN from "./audio/909/SN.wav";
import LT from "./audio/909/LT.wav";
import MT from "./audio/909/MT.wav";
import HT from "./audio/909/HT.wav";
import RS from "./audio/909/RS.wav";
import CL from "./audio/909/CL.wav";
import CH from "./audio/909/CH.wav";
import OH from "./audio/909/OH.wav";

const PRESETS = [
  {
    presetName: "Preset1",
    sounds: [
      {
        id: "BD",
        name: "BASS DRUM",
        source: BD,
        trigger: "Q",
        keyCode: 81,
      },
      {
        id: "SN",
        name: "SNARE",
        source: SN,
        trigger: "W",
        keyCode: 87,
      },
      {
        id: "LT",
        name: "LOW TOM",
        source: LT,
        trigger: "E",
        keyCode: 69,
      },
      {
        id: "MT",
        name: "MID TOM",
        source: MT,
        trigger: "A",
        keyCode: 65,
      },
      {
        id: "HT",
        name: "HIGH TOM",
        source: HT,
        trigger: "S",
        keyCode: 83,
      },
      {
        id: "RS",
        name: "RIM SHOT",
        source: RS,
        trigger: "D",
        keyCode: 68,
      },
      {
        id: "CL",
        name: "CLAP",
        source: CL,
        trigger: "Z",
        keyCode: 90,
      },
      {
        id: "CH",
        name: "CLOSED HAT",
        source: CH,
        trigger: "X",
        keyCode: 88,
      },
      {
        id: "OH",
        name: "OPEN HAT",
        source: OH,
        trigger: "C",
        keyCode: 67,
      },
    ],
  },
];

export default PRESETS;
