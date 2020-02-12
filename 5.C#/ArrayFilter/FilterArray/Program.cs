using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayFilter
{
    public delegate bool DelFilterArray(int x);
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("WELCOME TO ARRAY FILTER APPLICATION");
            Console.WriteLine("============================");
            Console.WriteLine("ENTER YOUR ARRAY HERE");
            Console.WriteLine("============================");
            int[] inputArray = new int[10];
            int iterator=0;
            int value;
            String input;
            int maxNum = 999999;
            int minNum = -999999;
            while (iterator != 10)
            {
                Console.WriteLine("Array Element: {0}", iterator + 1);
                Console.WriteLine("============================");
                input = Console.ReadLine();
                if (int.TryParse(input, out value) && value >= minNum && value <= maxNum)
                {
                    inputArray[iterator] = Convert.ToInt32(input);
                    iterator++;
                }
                else
                {
                    Console.WriteLine("Re-Enter Array Element");
                    Console.WriteLine("============================");
                }
            }
            Console.WriteLine("============================");

            FilterArray filterArray = new FilterArray();
            DelFilterArray evenFilter = new DelFilterArray(EvenFilter);
            DelFilterArray compareFilter = new DelFilterArray(CompareFilter);
            DelFilterArray divisibleFilter = new DelFilterArray(DivisibleFilter);


            while (true)
            {
                Console.WriteLine("============================");
                Console.WriteLine("1.RETURN ALL EVEN NUMBERS.\n2.RETURN ALL NUMBERS GREATER THAN 10.\n3.RETURN NUMBERS DIVISIBLE BY 5.\n4.QUIT");
                Console.WriteLine("============================");
                Console.WriteLine("Choose an option from the above list to continue");
                int choice = Int32.Parse(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        filterArray.GetResult(inputArray, evenFilter);
                        break;
                    case 2:
                        filterArray.GetResult(inputArray, compareFilter);
                        break;
                    case 3:
                        filterArray.GetResult(inputArray, divisibleFilter);
                        break;
                    case 4:
                        Console.WriteLine("BYE !!");
                        Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine("FALSE");
                        break;
                }
            }
        }

        public static bool EvenFilter(int ele)
        {
            if (ele % 2 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static bool CompareFilter(int ele)
        {
            if (ele>10)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static bool DivisibleFilter(int ele)
        {
            if (ele % 5 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
