using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayFilter
{
    class FilterArray
    {
        public void EvenFilter(int[] arr)
        {
            int iterator, counter = 0;
            int[] res_array = new int[10];
            for (iterator = 0; iterator < 10; iterator++)
            {
                if (arr[iterator] % 2 == 0)
                {
                    res_array[counter] = arr[iterator];
                    counter++;
                }
            }

            Console.WriteLine("----------------------------");
            for (iterator = 0; iterator < counter; iterator++)
            {
                Console.WriteLine(res_array[iterator]);
            }
            Console.WriteLine("----------------------------");
        }

        public void CompareFilter(int[] arr)
        {
            int iterator, counter = 0;
            int[] res_array = new int[10];
            for (iterator = 0; iterator < 10; iterator++)
            {
                if (arr[iterator] > 10)
                {
                    res_array[counter] = arr[iterator];
                    counter++;
                }
            }

            Console.WriteLine("----------------------------");
            for (iterator = 0; iterator < counter; iterator++)
            {
                Console.WriteLine(res_array[iterator]);
            }
            Console.WriteLine("----------------------------");
        }

        public void DivisibleFilter(int[] arr)
        {
            int iterator, counter = 0;
            int[] res_array = new int[10];
            for (iterator = 0; iterator < 10; iterator++)
            {
                if (arr[iterator] % 5 == 0)
                {
                    res_array[counter] = arr[iterator];
                    counter++;
                }
            }

            Console.WriteLine("----------------------------");
            for (iterator = 0; iterator < counter; iterator++)
            {
                Console.WriteLine(res_array[iterator]);
            }
            Console.WriteLine("----------------------------");
        }
    }
}
