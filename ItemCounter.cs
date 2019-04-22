// https://www.codewars.com/kata/587f279fadc9c5c1c400008e

using System;
using System.Collections.Generic;

namespace ItemCounterKata
{
    public class ItemCounter<T>
    {
        private readonly Dictionary<T, int> _itemCounts = new Dictionary<T, int>();

        public int DistinctItems
        {
            get { return this._itemCounts.Keys.Count; }
        }

        public int GetCount(T item)
        {
            if (!this.HasItem(item)) {
                throw new InvalidOperationException();
            }

            return this._itemCounts[item];
        }

        public bool HasItem(T item)
        {
            return this._itemCounts.ContainsKey(item);
        }


        public ItemCounter(T[] items)
        {
            if (items == null) {
                throw new ArgumentNullException();
            }
            
            Array.ForEach(items, item => {
                if (this.HasItem(item)) {
                    this._itemCounts[item]++;
                } else {
                    this._itemCounts[item] = 1;
                }
            });
            
            // Console.WriteLine(this._itemCounts
            //     .Select(item => $"{item.Key}: ${item.Value}")
            //     .Join(", "));
        }
    }
}