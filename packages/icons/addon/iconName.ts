import * as IconNames from './generated/iconNames';

/** String literal union type of all Blueprint UI icon names. */
export type IconName = typeof IconNames[keyof typeof IconNames];
