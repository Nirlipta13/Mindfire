using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapeVirtualFunction
{
    class Shape
    {
        protected double length;
        protected double width;

        public Shape(double l=0, double w=0)
        {
            length = l;
            width = w;
        }

        public virtual double getArea()
        {
            return length * width;
        }
    }
    class Rectangle : Shape
    {
        public Rectangle(double l=0, double w=0):base(l,w)
        {
        }
        public override double getArea()
        {
            Console.WriteLine("Area of Rectangle:");
            return length * width;
        }        
    }
    class Triangle : Shape
    {
        public Triangle(double l=0, double w=0):base(l,w)
        {
        }
        public override double getArea()
        {
            Console.WriteLine("Area of Triangle");
            return ((length * width)/2);
        }
    }
    class Caller
    {
        public void CallerArea(Shape sh)
        {
            double a;
            a = sh.getArea();
            Console.WriteLine("Area:{0}", a);
        }

    }
}
