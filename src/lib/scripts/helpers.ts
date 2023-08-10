export function* cycle(...items: any[]) {
    while (true) yield* items;
}