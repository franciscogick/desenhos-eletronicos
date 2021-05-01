import { Node } from 'vis-network/peer/umd/vis-network';

export interface ExtendedNode extends Node {
    name?: string;
    descricao?: string;
    fragment?: string;
    type?: string;
}

