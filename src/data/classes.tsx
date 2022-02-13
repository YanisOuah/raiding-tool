import druid from "../img/class/druid/balance.png";
import balance from "../img/class/druid/balance.png";
import feral from "../img/class/druid/feral.png";
import guardian from "../img/class/druid/guardian.png";
import restorationDruid from "../img/class/druid/restoration.png";

import hunter from "../img/class/hunter/hunter.png";
import beastmastery from "../img/class/hunter/beastmastery.png";
import marksman from "../img/class/hunter/marksman.png";
import survival from "../img/class/hunter/survival.png";

import mage from "../img/class/mage/mage.png";
import arcane from "../img/class/mage/arcane.png";
import fire from "../img/class/mage/fire.png";
import frost from "../img/class/mage/frost.png";

import paladin from "../img/class/paladin/paladin.png";
import holyPaladin from "../img/class/paladin/holy.png";
import protectionPaladin from "../img/class/paladin/protection.png";
import retribution from "../img/class/paladin/retribution.png";

import priest from "../img/class/priest/priest.png";
import discipline from "../img/class/priest/discipline.png";
import holyPriest from "../img/class/priest/holy.png";
import shadow from "../img/class/priest/shadow.png";

import rogue from "../img/class/rogue/rogue.png";
import assassination from "../img/class/rogue/assassination.png";
import combat from "../img/class/rogue/combat.png";
import subtlety from "../img/class/rogue/subtlety.png";

import shaman from "../img/class/shaman/shaman.png";
import elemental from "../img/class/shaman/elemental.png";
import enhancement from "../img/class/shaman/enhancement.png";
import restorationShaman from "../img/class/shaman/restoration.png";

import warlock from "../img/class/warlock/warlock.png";
import affliction from "../img/class/warlock/affliction.png";
import demonology from "../img/class/warlock/demonology.png";
import destruction from "../img/class/warlock/destruction.png";

import warrior from "../img/class/warrior/warrior.png";
import arms from "../img/class/warrior/arms.png";
import fury from "../img/class/warrior/fury.png";
import protectionWarrior from "../img/class/warrior/protection.png";

const raidclasses = [
  {
    id: 0,
    title: "Druid",
    specs: [
      { id: 0, title: "balance", img: balance },
      { id: 1, title: "feral", img: feral },
      { id: 2, title: "guardian", img: guardian },
      { id: 3, title: "restoration", img: restorationDruid },
    ],
    img: druid,
    color: "#FF7C0Ab0",
  },
  {
    id: 1,
    title: "Hunter",
    specs: [
      { id: 0, title: "Beastmastery", img: beastmastery },
      { id: 1, title: "Marksman", img: marksman },
      { id: 2, title: "Survival", img: survival },
    ],
    img: hunter,
    color: "#AAD372b0",
  },
  {
    id: 2,
    title: "Mage",
    specs: [
      { id: 0, title: "Arcane", img: arcane },
      { id: 1, title: "Fire", img: fire },
      { id: 2, title: "Frost", img: frost },
    ],
    img: mage,
    color: "#3FC7EBb0",
  },
  {
    id: 3,
    title: "Paladin",
    specs: [
      { id: 0, title: "holy", img: holyPaladin },
      { id: 1, title: "protection", img: protectionPaladin },
      { id: 2, title: "retribution", img: retribution },
    ],
    img: paladin,
    color: "#F48CBAb0",
  },
  {
    id: 4,
    title: "Priest",
    specs: [
      { id: 0, title: "discipline", img: discipline },
      { id: 1, title: "holy", img: holyPriest },
      { id: 2, title: "shadow", img: shadow },
    ],
    img: priest,
    color: "#FFFFFFb0",
  },
  {
    id: 5,
    title: "Rogue",
    specs: [
      { id: 0, title: "assassination", img: assassination },
      { id: 1, title: "combat", img: combat },
      { id: 2, title: "subtlety", img: subtlety },
    ],
    img: rogue,
    color: "#FFF468b0",
  },

  {
    id: 6,
    title: "Shaman",
    specs: [
      { id: 0, title: "elemental", img: elemental },
      { id: 1, title: "enhancement", img: enhancement },
      { id: 2, title: "restoration", img: restorationShaman },
    ],
    img: shaman,
    color: "#0070DDb0",
  },
  {
    id: 7,
    title: "Warlock",
    specs: [
      { id: 0, title: "affliction", img: affliction },
      { id: 1, title: "demonology", img: demonology },
      { id: 2, title: "destruction", img: destruction },
    ],
    img: warlock,
    color: "#8788EEb0",
  },
  {
    id: 8,
    title: "Warrior",
    specs: [
      { id: 0, title: "arms", img: arms },
      { id: 2, title: "fury", img: fury },
      { id: 1, title: "protection", img: protectionWarrior },
    ],
    img: warrior,
    color: "#C69B6Db0",
  },
];
export default raidclasses;
