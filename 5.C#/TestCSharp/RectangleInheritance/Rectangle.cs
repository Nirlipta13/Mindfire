using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RectangleInheritance
{
    class Rectangle
    {
        protected double width;
        protected double height;

        public Rectangle(double w,double h)
        {
            width = w;
            height=h;
        }
        public double getWidth()
        {
            return width;
        }
        public double getHeight()
        {
            return height;
        }
        public double getArea()
        {
            return width * height;
        }
        public void Display()
        {
            Console.WriteLine("Height:{0}",getHeight());
            Console.WriteLine("Width:{0}", getWidth());
            Console.WriteLine("Area:{0}",getArea());
        }
    }
    class TableTop : Rectangle
    {
        private double cost;
        public TableTop(double l,double w):base(l,w){

        }
        public double getCost()
        {
            cost = base.getArea() * 70;
            return cost;
        }
        public void Display()
        {
            base.Display();
            Console.WriteLine("Cost is:{0}", getCost());
        }

    }
}
