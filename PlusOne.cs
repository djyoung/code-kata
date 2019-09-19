// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
using System.Linq;

namespace Kata
{
    public static class Kata
    {
        public static int[] UpArray(int[] num)
        {
            if (num.Length == 0 || num.Any(n => 0 > n || n > 9))
            {
                return null;
            }

            for (int i = num.Length - 1; i >= 0; i--)
            {
                if (num[i] == 9) {
                    num[i] = 0;
                } else {
                    num[i]++;
                    return num;
                }
            }

            return new int[] { 1 }.Concat(num).ToArray();
        }
    }
}