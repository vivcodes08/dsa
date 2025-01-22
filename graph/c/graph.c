#include <stdio.h>
#include "queue.h"

void BFS(int G[][8],int start,int n){

    int j, i=start;
    int visited[8]={0};
    printf("%d " ,i);
    enqueue(i);

    while(!isEmpty()){
        i=dequeue();
        for(j=1; j<=n;j++){
            if(G[i][j] == 1 && visited[j] == 0){
                printf("%d " ,j);
                visited[j]=1;
                enqueue(j);
            }

        }
    }
    printf("\n");

}

void DFS(int G[][8],int start,int n){

    static int visited[8]={0};
    int j;

    if(visited[start] == 0){
        printf("%d " ,start);
        visited[start]=1;
        for( j=1;j<n;j++){
            DFS(G,j,n);
        }
    }
 
}
int main(){

    int A[8][8] = {{0, 0, 0, 0, 0, 0, 0, 0},
                   {0, 0, 1, 1, 1, 0, 0, 0},
                   {0, 1, 0, 1, 0, 0, 0, 0},
                   {0, 1, 1, 0, 1, 1, 0, 0},
                   {0, 1, 0, 1, 0, 1, 0, 0},
                   {0, 0, 0, 1, 1, 0, 1, 1},
                   {0, 0, 0, 0, 0, 1, 0, 0},
                   {0, 0, 0, 0, 0, 1, 0, 0}};

            BFS(A,1,8);
            DFS(A,2,8);
}