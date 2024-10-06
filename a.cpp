#include <FL/Fl.H>


#include <FL/Fl_Window.H>

Fl_Window *window = new Fl_Window(10, 10, 500,500);
int main (){
    window->show();  // Show the window on the screen.
    window.show(); // Show the window on the screen
    return Fl::run();
}