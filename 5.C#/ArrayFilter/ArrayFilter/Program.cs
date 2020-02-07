using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayFilter
{
   
    class FilterProgram
    {
        
        public void EvenFilter(int[] arr)
        {
            int iterator,counter=0;
            int[] res_array = new int[10];
            for (iterator = 0; iterator < 10; iterator++)
            {
                if (arr[iterator] % 2 == 0)
                {
                    res_array[counter] = arr[iterator];
                    counter++;
                }
            }
            
            for(iterator=0;iterator<res_array.Length;iterator++)
            {
                Console.WriteLine(res_array[iterator]);
            }
        }

        public void CompareFilter(int[] arr)
        {
            int iterator,counter=0;
            int[] res_array = new int[10];
            for (iterator = 0; iterator < 10; iterator++)
            {
                if (arr[iterator] > 10)
                {
                    res_array[counter] = arr[iterator];
                    counter++;
                }
            }
            for(iterator=0;iterator<res_array.Length;iterator++)
            {
                Console.WriteLine(res_array[iterator]);
            }
        }

        public void  DivisibleFilter(int[] arr)
        {
            int iterator,counter=0;
            int[] res_array = new int[10];
            for (iterator = 0; iterator < 10; iterator++)
            {
                if (arr[iterator] % 5 == 0)
                {
                    res_array[counter] = arr[iterator];
                    counter++;
                }
            }
            for(iterator=0;iterator<res_array.Length;iterator++)
            {
                Console.WriteLine(res_array[iterator]);
            }
        }

       
     }//end of 1st class
        
    
    class Program
    {
        public delegate void  FilterDelegate(int[] arr);
        
       

        static void Main(string[] args)
        {
            
            Console.WriteLine("ARRAY FILTER APPLICATION");
            Console.WriteLine("----------------------------");
            int[] input_array = new int[10];
            String input;
            int size = 10, iterator=0;
            int value;
            int maxNum = 999999;
            int minNum = -999999;
            while(iterator!=size)
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

            FilterProgram fp = new FilterProgram();
            FilterDelegate fd1 = new FilterDelegate(fp.EvenFilter);
            FilterDelegate fd2 = new FilterDelegate(fp.CompareFilter);
            FilterDelegate fd3 = new FilterDelegate(fp.DivisibleFilter);

            

            while (true)
            {
                Console.WriteLine("1.Return All Even Numbers.\n2.Return Numbers Greater than 10.\n3.Return Numbers divisible by 5.\n4.Quit");
                Console.WriteLine("----------------------------");
                Console.WriteLine("Choose an option from the above list to continue");
                int choice = Int32.Parse(Console.ReadLine());
                
                switch (choice)
                {
                    case 1:
                        fd1(input_array);
                        break;
                    case 2:
                       fd2(input_array);
                        break;
                    case 3:
                        fd3(input_array);
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
    }//end of class 2

}

