using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDelegate
{
    public delegate int operation(int x);
    class Program
    {
        static int num = 10;
        static int Addition(int a)
        {
            return a + num;
        }
        static int Multiplication(int a)
        {
            return a * a;
        }
        static void Main(string[] args)
        {
            operation op1 = new operation(Addition);
            operation op2 = new operation(Multiplication);
            Console.WriteLine("Addition:{0}", op1(10));
            Console.WriteLine("Multiplication:{0}", op2(10));
            Console.ReadLine();

        }
    }
}
