using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayFilter
{
    class FilterArray
    {
        public void GetResult(int[] arr, DelFilterArray delFilteArray)
        {
            int iterator = 0;
            Console.WriteLine("============================");
            for (iterator = 0; iterator < arr.Length; iterator++)
            {
                if (delFilteArray(arr[iterator]))
                {
                    Console.WriteLine(arr[iterator]);
                }
            }
        }
    }
}
