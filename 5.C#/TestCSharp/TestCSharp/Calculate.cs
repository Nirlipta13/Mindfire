using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestCSharp
{
    public class Calculate
    {
        public int CalculateFunction(int val1, int val2, int operatorInput)
        {
            do
            {
                switch (operatorInput)
                {
                    case 1:
                        return val1 + val2;

                    case 2:
                        return val1 - val2;

                    case 3:
                        return val1 * val2;

                    case 4:
                        return val1 / val2;

                    case 5:
                        Console.WriteLine("Bye!!");
                        Environment.Exit(0);
                        return 0;
                    default:
                        return 0;
                }
            } while (operatorInput != 5);
        }
    }
}
