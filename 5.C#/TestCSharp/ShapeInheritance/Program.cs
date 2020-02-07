using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapeInheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            Rectangle rect = new Rectangle();
            rect.setHeight(100);
            rect.setWidth(20);
            double result = rect.getArea();
            Console.WriteLine("The area is : {0}",result);
            Console.ReadLine();
        }
    }
}
