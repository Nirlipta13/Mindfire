using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RectangleInheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            TableTop t = new TableTop(10,7);
            t.Display();
            Console.ReadLine();
        }
    }
}
