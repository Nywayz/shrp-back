// IDs (tables immuables)
export type TypeId = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18
export type CategoryId = 1|2|3
export type TargetId = 1|2|3|4|5|6|7|8
export type StatusId = 1|2|3|4|5|6|7|8|9
export type StatId = 1|2|3|4|5|6|7

// Drapeaux d’interaction
export interface AttackFlags {
  makesContact?: boolean
  protectable?: boolean
  reflectable?: boolean
  mirrorable?: boolean
  snatchable?: boolean
  sound?: boolean
  punch?: boolean
  bite?: boolean
  powder?: boolean
  pulse?: boolean
  aura?: boolean
  ballistic?: boolean
  slicing?: boolean
  ignoresSubstitute?: boolean
  ignoresAccuracy?: boolean
  ignoresEvasion?: boolean
  thawsUser?: boolean
}

// Altérations d’état
export type StatusApplyTo = 'target' | 'user'
export interface StatusInfliction {
  status: StatusId
  chance: number            // 0–100 %
  applyTo?: StatusApplyTo   // défaut: 'target'
}

// Hausses/baisses de stats (-6..+6)
export interface StatStageChange {
  stat: StatId
  stages: number
  chance?: number           // défaut 100
  scope?: TargetId          // si omis: cible principale
}

// Mécaniques additionnelles usuelles
export interface AttackMechanics {
  priority?: number
  multiHit?: { min: number; max: number }
  chargeTurns?: number
  rechargeTurns?: number
  recoil?: { percentOfDamage?: number; flat?: number }
  drain?: { percentOfDamage: number }                // ex: Giga-Sangsue
  heal?: { percentOfMax?: number; flat?: number; target?: TargetId } // ex: Soin
  crashOnMiss?: { percentOfMax?: number; flat?: number } // ex: Pied Voltige
  alwaysCrit?: boolean                               // ex: Poing Karaté (si voulu)
  critStage?: number                                 // incrément du taux de crit
  ohko?: boolean
  bypassProtect?: boolean                            // ex: Ruse
  forceSwitchTarget?: boolean                        // ex: Cyclone
  switchesUser?: boolean                             // ex: Demi-Tour
  fixedDamage?: { flat?: number; userLevel?: boolean } // ex: Draco-Rage, Frappe Atlas
  status?: StatusInfliction[]
  statStages?: StatStageChange[]
}

// Stats communes à official/custom
export interface AttackStats {
  type: TypeId
  category: CategoryId
  target: TargetId
  pp: string
  power: number
  accuracy: number          // 0–100
  flags?: AttackFlags
  mech?: AttackMechanics
}

// Attaque
export interface Attack {
  id: number
  name: string
  description: string
  official: AttackStats
  custom: AttackStats
}
