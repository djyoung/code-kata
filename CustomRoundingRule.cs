// https://www.codewars.com/kata/5a80fee4fd8c06564b0000b5

using System;

public class CustomMath
{
    public static decimal Round(decimal number, int precision, int roundUpAt)
    {
        if (number == 0) {
            return number;
        }

        var factor = (decimal) Math.Pow(10, precision);
        var rule = (10 - roundUpAt) / (factor * 10);
        var result = (number + rule) * factor;
        
        return Math.Truncate(result) / factor;
    }
}