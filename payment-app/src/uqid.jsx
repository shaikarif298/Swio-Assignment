export const uqid = () => 

    String(Date.now().toString(32) + Math.toString(16)).replace(/\./g,""

    );
