#ifndef QUEUE_H
#define QUEUE_H

#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node *next;
}*front=NULL, *rear=NULL; 


void enqueue(int x){

    // Checking if stack is full;
    struct Node *newNode;
    newNode=(struct Node*)malloc(sizeof(struct Node));
    if(newNode == NULL){
        printf("Stack is full\n");
    }else{

        newNode->data = x;
        newNode->next = NULL;
        //! Special case (first node)
        if(front == NULL) {
            front=rear=newNode;
        }else{
            rear->next = newNode;
            rear=newNode;
        }


    }

}

int dequeue(){
    int x=-1;
    // check if stack is empty;
    if(front == NULL){
        printf("Stack is empty\n");
    }else{
        struct Node *temp;
        temp=front;
        front=front->next;
        x=temp->data;
        free(temp);
    }
    return x;
}

void display(){

    struct Node* iterator;
    iterator=front;
    while(iterator){
        printf("%d->", iterator->data);
        iterator=iterator->next;
    }

}

int isEmpty() {
    return (front == NULL);
}


#endif // QUEUE_H