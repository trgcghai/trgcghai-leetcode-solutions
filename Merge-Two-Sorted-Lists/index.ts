/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 * 
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Bản 1: dùng đệ quy
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null

    if (!list1) return list2;
    else if (!list2) return list1;

    let head = new ListNode(list1.val > list2.val ? list2.val : list1.val)
    let tail = head.val === list1.val ? mergeTwoLists(list1.next, list2) : mergeTwoLists(list1, list2.next)

    head.next = tail

    return head;
};

// Bản 2: dùng vòng lặp
function mergeTwoLists_loop(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head = new ListNode();
    let curr = head;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }

        curr = curr.next
    }

    if (list1) {
        curr.next = list1
    } else {
        curr.next = list2
    }

    return head.next;
};