using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilterArray
{
    class Filter
    {
        public void GetResult(int[] arr, IsArrayFilter isArrayFilter)
        {
            int iterator;
            Console.WriteLine("----------------------------");
            for (iterator = 0; iterator < arr.Length; iterator++)
            {
                if (isArrayFilter(arr[iterator]))
                {
                    Console.WriteLine(arr[iterator]);
                }
            }
        }
    }
}
