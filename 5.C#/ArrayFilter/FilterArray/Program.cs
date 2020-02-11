using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilterArray
{
    public delegate bool IsArrayFilter(int element);

    class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("ARRAY FILTER APPLICATION");
            Console.WriteLine("----------------------------");
            int[] input_array = new int[10];
            String input;
            int size = 10, iterator = 0;
            int value;
            int maxNum = 999999;
            int minNum = -999999;
            while (iterator != size)
            {
                Console.WriteLine("Array Element: {0}", iterator + 1);
                Console.WriteLine("----------------------------");
                input = Console.ReadLine();
                if (int.TryParse(input, out value) && value >= minNum && value <= maxNum)
                {
                    input_array[iterator] = Convert.ToInt32(input);
                    iterator++;
                }
                else
                {
                    Console.WriteLine("Re-Enter Array Element");
                    Console.WriteLine("----------------------------");
                }
            }


            IsArrayFilter isEvenFilter = new IsArrayFilter(EvenFilter);
            IsArrayFilter isCompareFilter = new IsArrayFilter(CompareFilter);
            IsArrayFilter isDivisibleFilter = new IsArrayFilter(DivisibleFilter);

            Filter filter = new Filter();

            while (true)
            {
                Console.WriteLine("1.Return All Even Numbers.\n2.Return Numbers Greater than 10.\n3.Return Numbers divisible by 5.\n4.Quit");
                Console.WriteLine("----------------------------");
                Console.WriteLine("Choose an option from the above list to continue");
                int choice = Int32.Parse(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                         filter.GetResult(input_array, isEvenFilter);
                         break;
                    case 2:
                         filter.GetResult(input_array, isCompareFilter);
                        break;
                    case 3:
                        filter.GetResult(input_array, isDivisibleFilter);
                        break;
                    case 4:
                        Console.WriteLine("Bye!!");
                        Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine("False");
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
            if (ele > 10 )
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
        
    }//end of class program

}
