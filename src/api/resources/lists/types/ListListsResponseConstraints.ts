//  This file was auto-generated from our API Definition.

/**
 * Do particular authorization constraints around this collection limit creation of new instances?
 */
export interface ListListsResponseConstraints {
    /** How many total instances of this resource are already in use? This is independent of any filter conditions applied to the query. Value may be larger than max_instances. As a special case, -1 is returned when access is unlimited. */
    currentTotalInstances?: number;
    /** How many total instances of this resource are allowed? This is independent of any filter conditions applied to the query. As a special case, -1 indicates unlimited. */
    maxInstances: number;
    /** May the user create additional instances of this resource? */
    mayCreate: boolean;
}
