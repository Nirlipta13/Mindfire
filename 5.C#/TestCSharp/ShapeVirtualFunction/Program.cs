using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapeVirtualFunction
{
    class Program
    {
        static void Main(string[] args)
        {
            Caller c = new Caller();
            Rectangle rect = new Rectangle(10, 7);
            Triangle tri=new Triangle(10,20);
            c.CallerArea(rect);
            c.CallerArea(tri);
            Console.ReadLine();
        }
    }
}
