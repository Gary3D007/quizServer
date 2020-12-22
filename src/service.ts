import fs = require('fs');
import csvParse = require('csv-parse/lib/sync');
import {IQuizElement} from './types';

const {getProperty} = require('./properties/properties');

const getQuizElements = (setNumber: number | string): IQuizElement[] => {
    const fileName = `${setNumber}.csv`;
    try {
        const fileData = readFile(fileName);

        if (!fileData) {
            return [];
        }

        return csvParse(fileData, {
            onRecord: ((record: Array<string>): IQuizElement => ({
                en: record[0],
                rusCorr: record[1],
                rusErr: record[2]
            }))
        });
    } catch (e) {
        console.error(e);
        return [];
    }
};

const readFile = (fileName: string): string => {
    const filePath = `${getProperty('data.folder')}/${fileName}`;
    const encoding = 'utf-8';

    try {
        if (!fs.existsSync(filePath)) {
            return '';
        }

        return fs.readFileSync(filePath, encoding);
    } catch (e) {
        console.error('Error reading file \'%s\'', fileName, e);
        return '';
    }
};

module.exports = Object.freeze({
    getQuizElements
});
