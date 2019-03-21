using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
  public static string SpinWords(string sentence)
  {
    return string.Join(" ", sentence
      .Split(" ")
      .Select(word => {
        return word.Length >= 5 ?
          string.Join("", word.ToCharArray().Reverse()) :
          word;
      }));
  }
}