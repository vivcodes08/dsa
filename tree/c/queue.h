#ifndef QUEUE_H
#define QUEUE_H

#include<stdio.h>
#include<stdlib.h>

struct Node {
    struct Node *lchild;
    int data;
    struct Node *rchild;
};

struct Queue{
    int size;
    int front;
    int rear;
    struct Node* *q;
};

void create(struct Queue* queue,int size){
    
    queue->size=size;
    queue->front=queue->rear=-1;
    queue->q=(struct Node **)malloc(queue->size*sizeof(struct Node *));

}

void enqueue(struct Queue* queue,struct Node* element){
    // Check if queue is full
    if(queue->front == queue->size-1){
        printf("Queue is full");
    }else{
        queue->front++;
        queue->q[queue->front]=element;
    }
}

struct Node* dequeue(struct Queue* queue){
    struct Node* x=NULL;
    //! Checking if queue is empty;
    if(queue->front == queue->rear){
        printf("Queue is empty");
    }else{
        queue->rear++;
        x=queue->q[queue->rear];
    }
    return x;
}

void display(struct Queue queue){
    // Check if queue is empty
    if(queue.front == queue.rear){
        printf("Queue is empty");
    }else{
        int temp=queue.rear;

        while(temp != queue.front){
            temp++;
            printf("%d ",queue.q[temp]);
            
        }
    }
}

int isEmpty(struct Queue queue){
    
    if(queue.front == queue.rear){
        return 1;
    }else{
        return 0;
    }
}

int isFull(struct Queue queue){
    if(queue.front == queue.size -1){
        return 1;
    }else{
        return 0;
    }
}



#endif // QUEUE_H