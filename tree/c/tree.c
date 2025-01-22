#include <stdio.h>
#include <string.h>
#include "queue.h"

struct Node *root = NULL;

void TreeCreate(){

    struct Node *p,*t;
    int x;
    struct Queue q;
    create(&q,100);

    printf("Enter the root value :");
    scanf("%d",&x);
    root= (struct Node *)malloc(sizeof(struct Node));
    root->data=x;
    root->lchild=root->rchild=NULL;
    enqueue(&q,root);

    while (!isEmpty(q))
    {
        p=dequeue(&q);
        printf("Enter lchild value %d :",p->data);
        scanf("%d",&x);
        if(x != -1){
            t=(struct Node *)malloc(sizeof(struct Node));
            t->lchild=t->rchild=NULL;
            t->data=x;
            p->lchild=t;
            enqueue(&q,t);

        }
        printf("Enter rchild value %d :", p->data);
        scanf("%d",&x);
        if(x != -1){
            t=(struct Node *)malloc(sizeof(struct Node));
            t->lchild=t->rchild=NULL;
            t->data=x;
            p->rchild=t;
            enqueue(&q,t);

        }
    }
    


}

void preorder(struct Node *p){
    if(p){
        printf("%d <--",p->data);
        preorder(p->lchild);
        preorder(p->rchild);
    }
}
void postorder(struct Node *p){
    if(p){
       
        postorder(p->lchild);
        postorder(p->rchild);
         printf("%d <--",p->data);
    }
}
void inorder(struct Node *p){
    if(p){
       
        inorder(p->lchild);
         printf("%d <--",p->data);
        inorder(p->rchild);
    }
}


int main(){
    TreeCreate();
    printf("\n************PreOrder Traversal********************\n");
    preorder(root);
    printf("\n************PostOrder Traversal********************\n");
    postorder(root);
    printf("\n************InOrder Traversal********************\n");
    inorder(root);
    printf("\n");
    return 0;

}