var sqlMap = {
    // 用户
    user: {
        add: 'insert into person(name, age) values (?, ?)',
        select: 'select * from person where name = ? and pwd = ?'
    },
    page1: {
    	selectC: 'select * from courseTable',
    	addOneC: 'insert into courseTable (couTableId) values (?)',
    	delOneC: 'delete from courseTable where couTableId = ?',
    	delAllC: 'delete from courseTable',
    	insertC: 'insert into courseTable (couTableId, couName, mon, tue, web, thu, fri, sat, sun) values ?',
    	selectN: 'select * from notetable where rowcell = ?',
    	insnoteN: 'insert into notetable (rowcell, titles, content) values (?, ?, ?)',
    	updnoteN: 'update notetable set titles = ? ,content = ? where rowcell = ?'
    },
}

module.exports = sqlMap;
