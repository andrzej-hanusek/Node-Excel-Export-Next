class SortableMap extends Map {
  sort(cmp = (a, b) => a[0].localeCompare(b[0])) {
    for (const [key, value] of [...this.entries()].sort(cmp)) {
      this.delete(key);
      this.set(key, value); // New keys are added at the end of the order
    }
  }
}

module.exports = SortableMap;
