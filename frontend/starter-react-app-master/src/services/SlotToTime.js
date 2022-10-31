const SlotToTime = (slot) => {
    var start = 10 + ((slot-1)*0.5) ;
    var end = 10+(slot*0.5);
    if(start>=13)
        start = start -12;
    if(end>=13)
        end = end - 12;
    // if(end===0)
    //     end=12;
    // if(start==0)
    //     start=12;
    if(start%2 === 0.5|| start%2 === 1.5) 
        start = (start-0.5) + ":30";
    else
        start = start +":00";

    if(end%2 === 0.5|| end%2 === 1.5) 
        end = (end-0.5) + ":30";
    else
        end = end +":00";
    
    return {
        "start": start,
        "end" : end
    }

}  
export default SlotToTime