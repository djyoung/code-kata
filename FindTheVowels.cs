using System;
using System.Linq;

public class Kata
{
    public static readonly string Vowels = "aeiouy";

    public static int[] VowelIndices(string word)
    {
        return word
            .ToCharArray()
            .Select((character, index) => new { character, index })
            .Where(letter => Vowels.Contains(Char.ToLower(letter.character)))
            .Select(letter => letter.index + 1)
            .ToArray();
    }
}