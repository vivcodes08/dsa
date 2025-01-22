
#ifndef QUEUE_H
#define QUEUE_H
#include <iostream> // For input/output operations
using namespace std;


class Node {
    public:
        Node *lchild;
        int data;
        Node *rchild;   
};

class Queue {

    private:
        int front;
        int rear;
        int size;
        Node* *Q;

    public:
        Queue(){
            this->front=this->rear=-1;
            this->size=10;
            this->Q=new Node*[this->size];
        }
        Queue(int size){
            this->front=this->rear=-1;
            this->size=size;
            this->Q=new Node*[this->size];
        }
        void enqueue(Node *q){}
        Node* dequeue(){}
        void display(){}

        int isEmpty(){
            return this->front == this->rear;
        }


};

void Queue::enqueue(Node *q){
        if(rear == size-1){
            cout << "Queue is full!" << endl;
        }else{
            rear++;
            Q[rear]=q;    
        }

}

Node* Queue::dequeue(){
    Node *q=NULL;

    if(front == rear){
        cout << "Queue is empty!" << endl;
    }else{
        q=Q[front+1];
        front++;
    }
    return q;
}



#endif // QUEUE_H